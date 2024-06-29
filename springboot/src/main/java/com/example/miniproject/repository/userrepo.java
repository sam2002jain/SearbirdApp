package com.example.miniproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.miniproject.entity.userinfo;

@Repository
public interface userrepo extends JpaRepository<userinfo,String> {

    @Query(value = "select * from userinfo", nativeQuery = true)
    List<userinfo> getAllData();

    @Query(value="select u from userinfo u where u.Company_Id=:cid and u.Branch_Id=:bid and u.User_Id=:user")
    userinfo checklogin(@Param("cid") String cid,@Param("bid") String bid,@Param("user") String user);

    @Query(value="select u from userinfo u where u.Company_Id=:cid and u.Branch_Id=:bid and u.User_Id=:user and u.mobile_number=:mobile")
    userinfo forget(@Param("cid") String cid,@Param("bid") String bid,@Param("user") String user,@Param("mobile") int mobile );
}
