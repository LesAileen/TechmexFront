package com.techmex.techmex.Util.dto;

import com.techmex.techmex.Data.Entities.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@AllArgsConstructor
@Builder
@Data
public class UserResponseDto {

    public final String mail;
    public final String username;
    public final UserRole role;
}
