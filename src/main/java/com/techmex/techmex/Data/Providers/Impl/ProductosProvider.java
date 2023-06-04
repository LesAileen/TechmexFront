package com.techmex.techmex.Data.Providers.Impl;


import com.techmex.techmex.Data.Dao.ICategoriasDao;
import com.techmex.techmex.Data.Dao.IProductosDao;

import com.techmex.techmex.Data.Entities.CategoriasModel;
import com.techmex.techmex.Data.Entities.ProductosModel;
import com.techmex.techmex.Data.Entities.enums.CategoriaRol;
import com.techmex.techmex.Data.Entities.enums.UserRole;
import com.techmex.techmex.Data.Providers.IProductosProvider;
import com.techmex.techmex.Data.Providers.Mapper.IMapper;

import com.techmex.techmex.Dtos.ProductosDto;
import com.techmex.techmex.Util.Security.SecurityContextHelper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor

public class ProductosProvider implements IProductosProvider {
    private final IProductosDao iProductosDao;
    private final IMapper<ProductosModel, ProductosDto> mapperProductos;
    private final ICategoriasDao iCategoriasDao;

    private final SecurityContextHelper securityContextHelper;

    @Override
    public List<ProductosDto> getProductos() {
       // System.out.println(securityContextHelper.getUser().getEmail());

        return iProductosDao.findAll().stream()
                .map(mapperProductos::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public ProductosDto getProductosId(Integer id) {
        return iProductosDao.findById(id)
                .map(mapperProductos::mapToDto)
                .orElse(null);
    }

    @Override
    public ProductosDto insertProductos(String nombre, Integer precio, String descripcion, CategoriaRol categoriaRol) {
        ProductosModel producto = ProductosModel.builder()
                .nombre(nombre)
                .precio(precio)
                .descripcion(descripcion)
                .categoriaRol(categoriaRol)
                .build();

        iProductosDao.save(producto);
        return mapperProductos.mapToDto(producto);
    }


    @Override
    public ProductosDto updateProductos(Integer id, String nombre, Integer precio, String descripcion, CategoriaRol categoriaRol) {
        ProductosModel producto = iProductosDao.findById(id).orElse(null);

        producto = producto.builder()
                .nombre(nombre)
                .precio(precio)
                .descripcion(descripcion)
                .categoriaRol(categoriaRol)
                .build();

        iProductosDao.save(producto);
        return mapperProductos.mapToDto(producto);
    }

    @Override
    public void deleteProductosId(Integer id) {

        if(!iProductosDao.existsById(id)){

            throw new RuntimeException("USUARIO NO EXISTE");
        }
        iProductosDao.deleteById(id);
    }
}
