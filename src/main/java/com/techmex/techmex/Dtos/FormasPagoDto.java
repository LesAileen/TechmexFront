package com.techmex.techmex.Dtos;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class FormasPagoDto {
    private Integer forma_pago_id;

    private String forma_pago;
}
