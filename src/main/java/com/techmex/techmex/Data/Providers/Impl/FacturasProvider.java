package com.techmex.techmex.Data.Providers.Impl;

import com.techmex.techmex.Data.Dao.IFacturasDao;
import com.techmex.techmex.Data.Dao.IFormasPagoDao;
import com.techmex.techmex.Data.Dao.IOrdenesDao;
import com.techmex.techmex.Data.Entities.FacturasModel;
import com.techmex.techmex.Data.Entities.FormasPagoModel;
import com.techmex.techmex.Data.Entities.OrdenesModel;
import com.techmex.techmex.Data.Entities.enums.UserRole;
import com.techmex.techmex.Data.Providers.IFacturasProvider;
import com.techmex.techmex.Data.Providers.Mapper.IMapper;
import com.techmex.techmex.Dtos.FacturasDto;
import com.techmex.techmex.Util.Security.SecurityContextHelper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class FacturasProvider implements IFacturasProvider {
    private final IFacturasDao iFacturasDao;
    private final IFormasPagoDao iFormasPagoDao;
    private final IOrdenesDao iOrdenesDao;
    private final IMapper<FacturasModel,FacturasDto> mapperFacturas;

    private final SecurityContextHelper securityContextHelper;
    @Override
    public List<FacturasDto> getFacturas() {
        UserRole rol = securityContextHelper.getUser().getRol();

        if(rol != UserRole.ADMIN) {
            return null;
        }


        return iFacturasDao.findAll().stream()
                .map(mapperFacturas::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public FacturasDto getFacturasId(Integer id) {
        return iFacturasDao.findById(id)
                .map(mapperFacturas::mapToDto)
                .orElse(null);
    }

    @Override
    public FacturasDto insertFacturas(Date fecha, Double total, Boolean efectivo, Double cambio, Integer forma_pago_id, Integer orden_id) {
        OrdenesModel orden = iOrdenesDao.findById(orden_id).orElse(null);
        FormasPagoModel formasPago = iFormasPagoDao.findById(forma_pago_id).orElse(null);
        FacturasModel factura = FacturasModel.builder()
                .fecha(fecha)
                .total(total)
                .efectivo(efectivo)
                .cambio(cambio)
                .formasPago(formasPago)
                .orden(orden)
                .build();

        iFacturasDao.save(factura);

        return mapperFacturas.mapToDto(factura);
    }

    @Override
    public FacturasDto updateFacturas(Integer id, Date fecha, Double total, Boolean efectivo, Double cambio, Integer forma_pago_id, Integer orden_id) {
        OrdenesModel orden = iOrdenesDao.findById(orden_id).orElse(null);
        FormasPagoModel formasPago = iFormasPagoDao.findById(forma_pago_id).orElse(null);
        FacturasModel factura = iFacturasDao.findById(id).orElse(null);

        factura = factura.builder()
                .factura_id(id)
                .fecha(fecha)
                .total(total)
                .efectivo(efectivo)
                .cambio(cambio)
                .formasPago(formasPago)
                .orden(orden)
                .build();

        iFacturasDao.save(factura);

        return mapperFacturas.mapToDto(factura);
    }

    @Override
    public void deleteFacturasId(Integer id) {
        if(!iFacturasDao.existsById(id)){
            throw new RuntimeException("LA FACTURA NO EXISTE");
    }
        iFacturasDao.deleteById(id);
    }


}
