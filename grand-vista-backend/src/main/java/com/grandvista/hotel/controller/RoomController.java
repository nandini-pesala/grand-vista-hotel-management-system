package com.grandvista.hotel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.grandvista.hotel.entity.Room;
import com.grandvista.hotel.service.RoomService;
import com.grandvista.hotel.repository.RoomRepository;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {

    @Autowired
    private RoomService roomService;
    
    @Autowired
    private RoomRepository roomRepository;

    @PostMapping
    public Room addRoom(@RequestBody Room room) {
        return roomService.addRoom(room);
    }

    @GetMapping
    public List<Room> getAllRooms() {
        return roomService.getAllRooms();
    }
    
    @GetMapping("/available")
    public List<Room> getAvailableRooms() {

        return roomService.getAvailableRooms();
    }
    
    @GetMapping("/occupied")
    public List<Room> getOccupiedRooms() {

        return roomRepository
                .findByRoomStatus("OCCUPIED");
    }
}