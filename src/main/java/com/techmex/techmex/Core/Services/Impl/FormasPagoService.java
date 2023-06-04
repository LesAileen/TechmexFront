package com.techmex.techmex.Core.Services.Impl;

import com.techmex.techmex.Core.Services.IFormasPagoService;
import com.techmex.techmex.Data.Providers.IFormasPagoProvider;
import com.techmex.techmex.Dtos.FormasPagoDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FormasPagoService implements IFormasPagoService {

    private final IFormasPagoProvider formasPagoProvider;
    @Override
    public List<FormasPagoDto>getListaFormasPago() {
        return formasPagoProvider.getFormasPago() ;
    }

    @Override
    public FormasPagoDto getFormasPagoId(Integer id) {
        return formasPagoProvider.getFormasPagoId(id);
    }

    @Override
    public FormasPagoDto insertFormasPagoId(String forma_pago) {
        return formasPagoProvider.insertFormasPagoId(forma_pago);
    }

    @Override
    public FormasPagoDto updateFormasPago(Integer id, String forma_pago) {
        return formasPagoProvider.updateFormasPago(id, forma_pago);
    }

    @Override
    public void deleteFormasPagoId(Integer id) {
        formasPagoProvider.deleteFormasPagoId(id);
    }
}
