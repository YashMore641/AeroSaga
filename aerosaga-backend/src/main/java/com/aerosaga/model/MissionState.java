package com.aerosaga.model;

/**
 * All possible mission states with defined transitions.
 *
 * Valid transitions:
 *   CREATED     → TAKEOFF
 *   TAKEOFF     → NAVIGATING, OFFLINE, COMPENSATING, ABORTED
 *   NAVIGATING  → DROPPING_PACKAGE, OFFLINE, COMPENSATING, ABORTED
 *   DROPPING_PACKAGE → RETURNING, OFFLINE, COMPENSATING, ABORTED
 *   RETURNING   → COMPLETED, OFFLINE, COMPENSATING, ABORTED
 *   OFFLINE     → (previous state on reconnect), FAILED, ABORTED
 *   PAUSED      → (previous state on resume), ABORTED
 *   COMPENSATING → FAILED, COMPLETED
 *   COMPLETED   → (terminal)
 *   FAILED      → (terminal)
 *   ABORTED     → (terminal)
 */
public enum MissionState {
    CREATED,
    TAKEOFF,
    NAVIGATING,
    DROPPING_PACKAGE,
    RETURNING,
    COMPLETED,
    OFFLINE,
    PAUSED,
    COMPENSATING,
    FAILED,
    ABORTED
}
