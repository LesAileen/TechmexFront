package com.techmex.techmex.Dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class OrdenesDto {
    private Integer orden_id;
    private Integer mesa_id;
    private Integer usuario_id;

}
