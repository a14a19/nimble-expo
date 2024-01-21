import React, { useState, useEffect, useCallback } from "react";
import { Text } from "react-native";

const CountdownTimer = ({ startDuration, handleClick, triggerTimer }) => {

    const [startTime, setStartTime] = useState("00:00");

    useEffect(() => {
        startTimer(startDuration);
    }, [triggerTimer]);

    function startTimer(duration) {
        // console.log("timer started")
        var timer = duration, minutes, seconds;
        const interval = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            --timer;

            setStartTime(minutes + ":" + seconds)

            if (`${minutes}:${seconds}` == '00:00') {
                return clearInt()
            }
        }, 1000);
        function clearInt() {
            // console.log("set interval removed")
            return clearInterval(interval)
        }
    }

    if (startTime == "00:00") {
        return <Text className="flex px-[4%] pt-[5%] text-center text-rose-600" onPress={() => handleClick()} style={{ fontFamily: "mont-semibold" }}>Resend</Text>;
    }

    return (
        <Text className="flex px-[4%] pt-[5%] text-center text-rose-300" style={{ fontFamily: "mont-semibold" }}>
            Resend in: {startTime}
        </Text>
    );
};

export default CountdownTimer;