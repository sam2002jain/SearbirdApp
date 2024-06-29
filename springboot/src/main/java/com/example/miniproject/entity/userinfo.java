package com.example.miniproject.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class userinfo {
    @Id     //this is use for primary key value getting
    private String User_Id;
//    @GeneratedValue (strategy = GenerationType.IDENTITY)
//    private int id;
    private String Company_Id;
    private String Branch_Id;

    private String User_Password;
    private String Mapped_User;
    private String User_Email;
    private String User_Name;
    private char Stop_Trans;
    private String Comments;
    private char Status;
    private String otp;
    private String mobile_number;

    public userinfo() {
    }

    public String getCompany_Id() {
        return Company_Id;
    }

    public void setCompany_Id(String company_Id) {
        Company_Id = company_Id;
    }

    public String getBranch_Id() {
        return Branch_Id;
    }

    public void setBranch_Id(String branch_Id) {
        Branch_Id = branch_Id;
    }

    public String getUser_Id() {
        return User_Id;
    }

    public void setUser_Id(String user_Id) {
        User_Id = user_Id;
    }

    public String getUser_Password() {
        return User_Password;
    }

    public void setUser_Password(String user_Password) {
        User_Password = user_Password;
    }

    public String getMapped_User() {
        return Mapped_User;
    }

    public void setMapped_User(String mapped_User) {
        Mapped_User = mapped_User;
    }

    public String getUser_Email() {
        return User_Email;
    }

    public void setUser_Email(String user_Email) {
        User_Email = user_Email;
    }

    public char getStop_Trans() {
        return Stop_Trans;
    }

    public String getUser_Name() {
        return User_Name;
    }

    public void setUser_Name(String user_Name) {
        User_Name = user_Name;
    }

    public void setStop_Trans(char stop_Trans) {
        Stop_Trans = stop_Trans;
    }

    public String getComments() {
        return Comments;
    }

    public void setComments(String comments) {
        Comments = comments;
    }

    public char getStatus() {
        return Status;
    }

    public void setStatus(char status) {
        Status = status;
    }

    public String getOtp() {
        return otp;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }

    public String getMobile_number() {
        return mobile_number;
    }

    public void setMobile_number(String mobile_number) {
        this.mobile_number = mobile_number;
    }
}
