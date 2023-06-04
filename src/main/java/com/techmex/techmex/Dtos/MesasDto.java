
package com.techmex.techmex.Dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class MesasDto {
    private Integer id_mesas;
    private Integer capacidad;
    private Integer qr;
    private boolean llevar;


}
