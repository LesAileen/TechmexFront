package com.techmex.techmex.Core.Services;
import com.techmex.techmex.Data.Entities.enums.CategoriaRol;
import com.techmex.techmex.Dtos.ProductosDto;

import java.util.List;

public interface IProductosService {
    List<ProductosDto> getProductos();
    ProductosDto getProductosId(Integer id);
    ProductosDto insertProductos(String nombre, Integer precio, String descripcion, CategoriaRol categoriaRol);
    ProductosDto updateProductos(Integer id, String nombre, Integer precio, String descripcion, CategoriaRol categoriaRol);
    void deleteProductosId(Integer id);
}
