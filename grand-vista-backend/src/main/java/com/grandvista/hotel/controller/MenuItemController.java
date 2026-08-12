package com.grandvista.hotel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.grandvista.hotel.service.MenuItemService;
import com.grandvista.hotel.entity.MenuItem;

@RestController
@RequestMapping("/api/menu")
public class MenuItemController {

    @Autowired
    private MenuItemService menuItemService;

    @PostMapping
    public MenuItem addMenuItem(
            @RequestBody MenuItem menuItem) {

        return menuItemService.addMenuItem(menuItem);
    }

    @GetMapping
    public List<MenuItem> getAllMenuItems() {

        return menuItemService.getAllMenuItems();
    }
}