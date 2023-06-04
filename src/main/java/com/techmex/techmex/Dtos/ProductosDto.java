package com.techmex.techmex.Dtos;

import com.techmex.techmex.Data.Entities.enums.CategoriaRol;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class ProductosDto {

    private String nombre;
    private Integer precio;
    private String descripcion;
    private CategoriaRol categoriaRol;

}
