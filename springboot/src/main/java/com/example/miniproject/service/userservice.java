package com.example.miniproject.service;

import com.example.miniproject.entity.userinfo;

import java.util.List;

public interface userservice {

    public userinfo saveUser(userinfo userinfo);
    public List<userinfo> getAllUser();

    public List<userinfo> getAllData();

    //public List<userinfo> getAllData();
}
