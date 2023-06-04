package com.techmex.techmex.Core.Controllers;

import com.techmex.techmex.Core.Services.ICategoriasService;
import com.techmex.techmex.Dtos.CategoriasDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/categorias")
public class CategoriasController {
    private final ICategoriasService categoriasService;

    @GetMapping("/lista")
    public List<CategoriasDto> listaCategorias(){

        return categoriasService.getListaCategorias();

    }
    // GET = SELECT...
    @GetMapping ("/buscar/{id}")
    public CategoriasDto buscarCategoriasId(@PathVariable Integer id){

        return categoriasService.getCategoriasId(id);
    }
    //POST = INSERT...
    @PostMapping("/insertar")
    public CategoriasDto insertarCategoria(String categoria){

        return categoriasService.insertCategorias(categoria);
    }
    //PUT = UPDATE...
    @PutMapping("/actualizar/{id}")
    public CategoriasDto updateProyecto(@PathVariable Integer id, String categoria){

        return categoriasService.updateCategorias(id, categoria);
    }
    //DELETE = DELETE...
    @DeleteMapping("/borrar/{id}")
    public void borrarCategoria(@PathVariable Integer id){

        categoriasService.deleteCategoriasId(id);
    }

}
