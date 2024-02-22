"use client"
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";
import { selectTheme } from "@/app/redux/slices/darkModeSlice ";

const Graph = () => {
  const currentTheme = useSelector(selectTheme);

  const canvasEl = useRef(null);

  const colors = {
    light: {
      blue: {
        default: "#4379ee",
        half: "rgba(63, 119, 238, 0.5)",
        quarter: "rgba(63, 119, 238, 0.25)",
        zero: "rgba(63, 119, 238, 0)",
      },
    },
    dark: {
      blue: {
        default: "#4a63e7",
        half: "rgba(74, 99, 231, 0.5)",
        quarter: "rgba(74, 99, 231, 0.25)",
        zero: "rgba(74, 99, 231, 0)",
      },
    },
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");

    const themeColors = currentTheme === "dark" ? colors.dark : colors.light;

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, themeColors.blue.half);
    gradient.addColorStop(0.65, themeColors.blue.quarter);
    gradient.addColorStop(1, themeColors.blue.zero);

    const weight = [
      20, 25.2, 30, 35.3, 50, 40.4, 46.4, 55.2, 30.2, 35.3, 56.6, 44.6, 85.3,
    ];

    const labels = [
      "5k",
      "10k",
      "15k",
      "20k",
      "25k",
      "30k",
      "35k",
      "40k",
      "45k",
      "50k",
      "55k",
      "60k",
    ];

    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: gradient,
          label: "",
          data: weight,
          fill: true,
          borderWidth: 2,
          borderColor: themeColors.blue.default,
          pointBackgroundColor: themeColors.blue.default,
          pointRadius: 3,
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        scales: {
          y: {
            ticks: {
              color: currentTheme === "dark" ? "#FFFFFF" : "#000000",
            },
          },
          x: {
            ticks: {
              color: currentTheme === "dark" ? "#FFFFFF" : "#000000",
            },
          },
        },
      },
    };

    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  }, [currentTheme, colors.dark, colors.light]);

  return <canvas id="myChart" ref={canvasEl} />;
};

export default Graph;
