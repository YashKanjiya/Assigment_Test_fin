package com.example.closebacked.UserMapper;


import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.closebacked.dto.SignUpDto;
import com.example.closebacked.dto.UserDto;
import com.example.closebacked.entites.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);

}