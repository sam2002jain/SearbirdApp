package com.example.miniproject.service;
import com.example.miniproject.entity.userinfo;
import com.example.miniproject.repository.userrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class userserviceimpl implements userservice {

    @Autowired
    private userrepo userrepository;

    @Override
    public userinfo saveUser(userinfo userinfo) {
        return userrepository.save(userinfo);
    }

    @Override
    public List<userinfo> getAllUser() {
        return userrepository.findAll();
    }
    @Override
    public List<userinfo> getAllData() {
        return userrepository.getAllData();
    }

}