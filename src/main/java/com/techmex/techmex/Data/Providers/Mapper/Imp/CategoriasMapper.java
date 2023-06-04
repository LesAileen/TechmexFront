package com.techmex.techmex.Data.Providers.Mapper.Imp;

import com.techmex.techmex.Data.Entities.CategoriasModel;
import com.techmex.techmex.Data.Providers.Mapper.IMapper;
import com.techmex.techmex.Dtos.CategoriasDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class CategoriasMapper implements IMapper<CategoriasModel, CategoriasDto> {
    @Override
    public CategoriasDto mapToDto(CategoriasModel categoriasModel) {
        return CategoriasDto.builder()
                .categoria_id(categoriasModel.getCategoria_id())
                .categoria(categoriasModel.getCategoria())
                .build();
    }

    @Override
    public CategoriasModel mapToEntity(CategoriasDto categoriasDto) {

        return CategoriasModel.builder()
                .categoria_id(categoriasDto.getCategoria_id())
                .categoria(categoriasDto.getCategoria())
                .build();
    }

}
