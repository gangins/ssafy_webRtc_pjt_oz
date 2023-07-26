package com.fire4bird.oz.round.repository;

import com.fire4bird.oz.round.entity.Round;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoundRepository extends JpaRepository<Round, Integer> {
    Optional<Round> findByTeamNameNull(String teamName);

}