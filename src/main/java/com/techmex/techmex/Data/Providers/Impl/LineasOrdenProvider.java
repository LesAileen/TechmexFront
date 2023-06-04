package com.techmex.techmex.Data.Providers.Impl;

import com.techmex.techmex.Data.Dao.ILineasOrdenDao;
import com.techmex.techmex.Data.Dao.IOrdenesDao;
import com.techmex.techmex.Data.Dao.IProductosDao;
import com.techmex.techmex.Data.Entities.LineasOrdenModel;
import com.techmex.techmex.Data.Entities.OrdenesModel;
import com.techmex.techmex.Data.Entities.ProductosModel;
import com.techmex.techmex.Data.Providers.ILineasOrdenProvider;
import com.techmex.techmex.Data.Providers.Mapper.IMapper;
import com.techmex.techmex.Dtos.LineasOrdenDto;
import com.techmex.techmex.Util.Security.SecurityContextHelper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class LineasOrdenProvider implements ILineasOrdenProvider {
    private final ILineasOrdenDao iLineasOrdenDao;
    private final IProductosDao iProductosDao;
    private final IOrdenesDao iOrdenesDao;
    private final SecurityContextHelper securityContextHelper;

    private final IMapper<LineasOrdenModel, LineasOrdenDto> mapperLineasOrden;
    @Override
    public List<LineasOrdenDto> getLineasOrden() {

        return iLineasOrdenDao.findAll().stream()
                .map(mapperLineasOrden::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public LineasOrdenDto getLineasOrdenId(Integer id) {
        return  iLineasOrdenDao.findById(id)
                .map(mapperLineasOrden::mapToDto)
                .orElse(null);
    }

    @Override
    public LineasOrdenDto insertLineasOrden(Integer orden_id, Integer cantidad, Integer producto_id) {

        ProductosModel producto = iProductosDao.findById(producto_id).orElse(null);
        OrdenesModel orden= iOrdenesDao.findById(orden_id).orElse(null);

        LineasOrdenModel lineasOrden = LineasOrdenModel.builder()
                .orden(orden)
                .cantidad(cantidad)
                .producto(producto)
                .build();

        iLineasOrdenDao.save(lineasOrden);
        return mapperLineasOrden.mapToDto(lineasOrden);
    }

    @Override
    public LineasOrdenDto updateLineasOrden(Integer id, Integer orden_id, Integer cantidad, Integer producto_id) {
        ProductosModel producto = iProductosDao.findById(producto_id).orElse(null);
        OrdenesModel orden= iOrdenesDao.findById(orden_id).orElse(null);
        LineasOrdenModel lineasOrden = iLineasOrdenDao.findById(id).orElse(null);

        lineasOrden = lineasOrden.builder()
                .linea_orden_id(id)
                .orden(orden)
                .cantidad(cantidad)
                .producto(producto)
                .build();

        iLineasOrdenDao.save(lineasOrden);
        return mapperLineasOrden.mapToDto(lineasOrden);



    }

    @Override
    public void deleteLineasOrden(Integer id) {
        if(!iLineasOrdenDao.existsById(id)){

            throw new RuntimeException("LINEAS DE ORDEN NO EXISTE");
        }
        iLineasOrdenDao.deleteById(id);
    }
}
