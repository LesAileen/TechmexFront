package com.techmex.techmex.Data.Providers.Mapper.Imp;

import com.techmex.techmex.Data.Entities.ProductosModel;
import com.techmex.techmex.Data.Providers.Mapper.IMapper;
import com.techmex.techmex.Dtos.ProductosDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class ProductosMapper implements IMapper<ProductosModel, ProductosDto> {
    @Override
    public ProductosDto mapToDto(ProductosModel productosModel) {
        return ProductosDto.builder()
                .nombre(productosModel.getNombre())
                .precio(productosModel.getPrecio())
                .descripcion(productosModel.getDescripcion())
                .categoriaRol(productosModel.getCategoriaRol())
                .build();
    }

    @Override
    public ProductosModel mapToEntity(ProductosDto productosDto) {
        return null;
    }
}
