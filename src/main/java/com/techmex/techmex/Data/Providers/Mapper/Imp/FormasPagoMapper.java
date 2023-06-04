package com.techmex.techmex.Data.Providers.Mapper.Imp;


import com.techmex.techmex.Data.Entities.FormasPagoModel;
import com.techmex.techmex.Data.Providers.Mapper.IMapper;
import com.techmex.techmex.Dtos.FormasPagoDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class FormasPagoMapper implements IMapper<FormasPagoModel, FormasPagoDto> {
    @Override
    public FormasPagoDto mapToDto(FormasPagoModel formasPagoModel) {
        return FormasPagoDto.builder()
                .forma_pago_id(formasPagoModel.getForma_pago_id())
                .forma_pago(formasPagoModel.getForma_pago())
                .build();
    }

    @Override
    public FormasPagoModel mapToEntity(FormasPagoDto categoriasDto) {
        return null;
    }

}
