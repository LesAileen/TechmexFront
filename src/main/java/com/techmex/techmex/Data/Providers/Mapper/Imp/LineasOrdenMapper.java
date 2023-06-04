package com.techmex.techmex.Data.Providers.Mapper.Imp;

import com.techmex.techmex.Data.Entities.LineasOrdenModel;
import com.techmex.techmex.Data.Providers.Mapper.IMapper;
import com.techmex.techmex.Dtos.LineasOrdenDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
@Component
@AllArgsConstructor
public class LineasOrdenMapper implements IMapper<LineasOrdenModel, LineasOrdenDto> {
    @Override
    public LineasOrdenDto mapToDto(LineasOrdenModel lineasOrdenModel) {
        return LineasOrdenDto.builder()
                .orden_id((lineasOrdenModel.getOrden()==null)? null: lineasOrdenModel.getOrden().getOrden_id())
                .linea_orden_id(lineasOrdenModel.getLinea_orden_id())
                .cantidad(lineasOrdenModel.getCantidad())
                .producto_id((lineasOrdenModel.getProducto()==null)? null: lineasOrdenModel.getProducto().getProducto_id())
                .build();
    }

    @Override
    public LineasOrdenModel mapToEntity(LineasOrdenDto lineasOrdenDto) {
        return null;
    }
}
