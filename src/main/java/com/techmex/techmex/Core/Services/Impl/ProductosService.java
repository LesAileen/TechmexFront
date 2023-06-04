package com.techmex.techmex.Core.Services.Impl;

import com.techmex.techmex.Core.Services.IProductosService;
import com.techmex.techmex.Data.Entities.enums.CategoriaRol;
import com.techmex.techmex.Data.Providers.IProductosProvider;
import com.techmex.techmex.Dtos.ProductosDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProductosService implements IProductosService {

    private final IProductosProvider productosProvider;
    @Override
    public List<ProductosDto> getProductos() {
        return productosProvider.getProductos();
    }

    @Override
    public ProductosDto getProductosId(Integer id) {
        return productosProvider.getProductosId(id);
    }

    @Override
    public ProductosDto insertProductos(String nombre, Integer precio, String descripcion, CategoriaRol categoriaRol) {
        return productosProvider.insertProductos(nombre, precio, descripcion, categoriaRol);
    }

    @Override
    public ProductosDto updateProductos(Integer id, String nombre, Integer precio, String descripcion, CategoriaRol categoriaRol) {
        return productosProvider.updateProductos(id, nombre, precio, descripcion, categoriaRol);
    }

    @Override
    public void deleteProductosId(Integer id) {
        productosProvider.deleteProductosId(id);
    }
}
