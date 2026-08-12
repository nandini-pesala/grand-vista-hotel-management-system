package com.grandvista.hotel.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.grandvista.hotel.entity.Room;

public interface RoomRepository extends JpaRepository<Room, Integer>{

	List<Room> findByRoomStatus(String roomStatus);
	
	long countByRoomStatus(String roomStatus);
	
	Optional<Room> findByRoomNumber(Integer roomNumber);
}
