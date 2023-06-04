package com.techmex.techmex.Data.Providers;

import com.techmex.techmex.Dtos.FormasPagoDto;

import java.util.List;

public interface IFormasPagoProvider {
    List<FormasPagoDto> getFormasPago();
    FormasPagoDto getFormasPagoId(Integer id);
    FormasPagoDto insertFormasPagoId(String forma_pago);
    FormasPagoDto updateFormasPago(Integer id, String forma_pago);
    void deleteFormasPagoId(Integer id);
}
