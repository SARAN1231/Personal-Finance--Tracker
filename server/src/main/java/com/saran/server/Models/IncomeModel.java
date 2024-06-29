package com.saran.server.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class IncomeModel {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private Integer amount;
    private String type = "income"; // default type will be income
    private String category;
    private String description;
   @Temporal(TemporalType.DATE)
    private Date createdAt = new Date();
}
