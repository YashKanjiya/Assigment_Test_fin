package com.closebacked.demo.backend.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.closebacked.demo.backend.dtos.SignUpDto;
import com.closebacked.demo.backend.dtos.UserDto;
import com.closebacked.demo.backend.entites.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}
