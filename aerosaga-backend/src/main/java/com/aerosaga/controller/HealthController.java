package com.aerosaga.controller;

import com.aerosaga.config.TemporalConfig;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Health and diagnostic endpoint.
 */
@RestController
public class HealthController {

    private final TemporalConfig temporalConfig;

    public HealthController(TemporalConfig temporalConfig) {
        this.temporalConfig = temporalConfig;
    }

    @GetMapping("/api/health")
    public Map<String, String> health() {
        Map<String, String> info = new LinkedHashMap<>();
        info.put("application", "AeroSaga Backend");
        info.put("status", "UP");
        info.put("version", "1.0.0");
        info.put("temporal", temporalConfig.isTemporalAvailable() ? "CONNECTED" : "UNAVAILABLE");
        return info;
    }
}
