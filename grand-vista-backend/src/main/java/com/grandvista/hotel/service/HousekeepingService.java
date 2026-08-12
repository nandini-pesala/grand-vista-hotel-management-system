package com.grandvista.hotel.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grandvista.hotel.entity.HousekeepingRequest;
import com.grandvista.hotel.repository.HousekeepingRequestRepository;
import com.grandvista.hotel.entity.Room;
import com.grandvista.hotel.repository.RoomRepository;

@Service
public class HousekeepingService {

    @Autowired
    private HousekeepingRequestRepository
            housekeepingRepository;

    public List<HousekeepingRequest>
    getPendingRequests() {

        return housekeepingRepository
                .findByStatus("PENDING");
    }
    
    @Autowired
    private RoomRepository roomRepository;

    public String completeCleaning(
    Integer requestId){

        HousekeepingRequest request =
                housekeepingRepository
                .findById(requestId)
                .orElseThrow();

        request.setStatus("COMPLETED");

        Room room = request.getRoom();

        room.setRoomStatus("AVAILABLE");

        roomRepository.save(room);

        housekeepingRepository.save(request);

        return "Cleaning Completed";
    }
}