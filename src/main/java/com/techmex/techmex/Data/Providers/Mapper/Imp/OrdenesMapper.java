package com.techmex.techmex.Data.Providers.Mapper.Imp;

import com.techmex.techmex.Data.Entities.OrdenesModel;
import com.techmex.techmex.Data.Providers.Mapper.IMapper;
import com.techmex.techmex.Dtos.OrdenesDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
@Component
@AllArgsConstructor
public class OrdenesMapper implements IMapper<OrdenesModel, OrdenesDto> {
    @Override
    public OrdenesDto mapToDto(OrdenesModel ordenesModel) {

        return OrdenesDto.builder()
                .orden_id(ordenesModel.getOrden_id())
                //.mesa_id(ordenesModel.getMesa_id())
                //.usuario_id(ordenesModel.getUsuar)
                .build();
    }

    @Override
    public OrdenesModel mapToEntity(OrdenesDto ordenesDto) {
        return null;
    }
}
