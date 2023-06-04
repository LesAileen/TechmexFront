package com.techmex.techmex.Core.Services;

import com.techmex.techmex.Dtos.FormasPagoDto;

import java.util.List;

public interface IFormasPagoService {
    List<FormasPagoDto> getListaFormasPago();
    FormasPagoDto getFormasPagoId(Integer id);
    FormasPagoDto insertFormasPagoId(String forma_pago);
    FormasPagoDto updateFormasPago(Integer id, String forma_pago);
    void deleteFormasPagoId(Integer id);
}
