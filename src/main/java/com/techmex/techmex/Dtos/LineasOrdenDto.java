package com.techmex.techmex.Dtos;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder

public class LineasOrdenDto {

    private Integer linea_orden_id;
    private Integer orden_id;
    private Integer cantidad;
    private Integer producto_id;

}
