package com.example.miniproject.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.miniproject.entity.Branch;
import com.example.miniproject.entity.Company;
import com.example.miniproject.entity.userinfo;
import com.example.miniproject.repository.BranchRepo;
import com.example.miniproject.repository.CompanyRepo;
import com.example.miniproject.repository.userrepo;
import com.example.miniproject.service.userservice;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class usercontroller {
    @Autowired
    private userservice userservice;

    @Autowired
    private CompanyRepo companyrepo;

    @Autowired
    private userrepo urepo;

    @Autowired
    private BranchRepo branchrepo;

//    @PostMapping("/add")
//    public String add(@RequestBody userinfo userinfo){
//        userservice.saveUser(userinfo);
//        return "New student is added";
//    }

    @GetMapping("/getAll")
    public List<userinfo> list() {
        return userservice.getAllData();
    }

    @GetMapping("/getCompany")
    public List<Company> getAllCompany(){
        return companyrepo.getAll();
    }

    @GetMapping("/getBranch/{cid}")
    public List<Branch> getBranch(@PathVariable("cid") String cid){
        return branchrepo.getBranchByCompany(cid);
    }

//    @PutMapping("/update")
//    public String update(@RequestBody userinfo userinfo){
//        userservice.saveUser(userinfo);
//        return "New student is updated";
//    }
//}

    @GetMapping("/login")

    public String login(@RequestParam("company") String company,@RequestParam("branch") String branch,
                        @RequestParam("user") String user,@RequestParam("password") String password,
                        @RequestParam("otp") String otp) {

        userinfo userData = urepo.checklogin(company, branch, user);

        if(userData != null) {
            if(password.equals(userData.getUser_Password())){
                if(otp.equals(userData.getOtp())) {
                    return "Login Successfully";
                }
                else {
                    return "Please enter correct otp";
                }
            }
            else {
                return "Please enter the correct password";
            }
        }
        else {
            return "User not found";
        }


    }


    @GetMapping("/forget")

    public String forget(@RequestParam("company") String company,@RequestParam("branch") String branch,
                        @RequestParam("user") String user,@RequestParam("mobile") String mobile,
                        @RequestParam("otp") String otp) {

        userinfo userData = urepo.forget(company, branch, user, Integer.parseInt(mobile));

        if(userData != null) {
            if(mobile.equals(userData.getMobile_number())){
                if(otp.equals(userData.getOtp())) {
                    return "Now you can change your password";
                }
                else {
                    return "Please enter correct otp";
                }
            }
            else {
                return "Please enter the correct mobile number";
            }
        }
        else {
            return "User not found";
        }


    }




    @PostMapping("/changePassword")
    public String changePassword(@RequestParam("company") String company,
                                 @RequestParam("branch") String branch,
                                 @RequestParam("user") String user,
                                 @RequestParam("password") String newPassword) {

        userinfo userData = urepo.checklogin(company, branch, user);

        if(userData != null) {
            userData.setUser_Password(newPassword);
            urepo.save(userData);
            return "Password changed successfully";
        } else {
            return "User not found";
        }
    }

}
