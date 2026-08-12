package com.grandvista.hotel.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.grandvista.hotel.entity.MenuItem;

public interface MenuItemRepository  extends JpaRepository<MenuItem, Integer>{

}
