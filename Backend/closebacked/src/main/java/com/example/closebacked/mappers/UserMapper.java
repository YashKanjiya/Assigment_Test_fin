package com.example.closebacked.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.closebacked.dtos.SignUpDto;
import com.example.closebacked.dtos.UserDto;
import com.example.closebacked.entites.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}
