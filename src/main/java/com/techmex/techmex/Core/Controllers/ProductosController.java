package com.techmex.techmex.Core.Controllers;

import com.techmex.techmex.Core.Services.IProductosService;
import com.techmex.techmex.Data.Entities.enums.CategoriaRol;
import com.techmex.techmex.Dtos.ProductosDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/productos")
public class ProductosController {
    private final IProductosService productosService;
    @GetMapping("/lista")
    public List<ProductosDto> listaProductos(){
        return productosService.getProductos();
    }
    @GetMapping("/buscar/{id}")
    public ProductosDto buscarProductos(@PathVariable Integer id){
        return productosService.getProductosId(id);
    }
    @PostMapping("/insertar")
    public ProductosDto insertarProductos(String nombre, Integer precio,String descripcion, CategoriaRol categoriaRol){
        return productosService.insertProductos(nombre, precio , descripcion, categoriaRol);
    }
    @PutMapping("/actualizar/{id}")
    public ProductosDto actualizarProducto(@PathVariable Integer id, String nombre, Integer precio, String descripcion, CategoriaRol categoriaRol){
        return productosService.updateProductos(id, nombre, precio, descripcion, categoriaRol);
    }
    @DeleteMapping("/borrar/{id}")
    public void  borrarProducto(@PathVariable Integer id){
        productosService.deleteProductosId(id);
    }
}
