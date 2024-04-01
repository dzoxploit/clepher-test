import React, { useState, useEffect } from "react";
import styles from "./IntradayCard.module.css";

interface IntradayData {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

interface IntradayCardProps {
  symbol: string;
}

const IntradayCard: React.FC<IntradayCardProps> = ({ symbol }) => {
  const [intradayData, setIntradayData] = useState<IntradayData[]>([]); // Ubah menjadi array dari IntradayData

  useEffect(() => {
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=RIBXT3XYLI69PC0Q`
    )
      .then((response) => response.json())
      .then((data: { [key: string]: any }) => {
        const latestData = data["Time Series (5min)"];

        // Menyimpan seluruh data time series dalam bentuk array
        const intradayDataArray = Object.entries(latestData).map(
          ([timestamp, entry]: [string, unknown]) => {
            const typedEntry = entry as { [key: string]: string }; // Type assertion
            return {
              date: timestamp,
              open: typedEntry["1. open"],
              high: typedEntry["2. high"],
              low: typedEntry["3. low"],
              close: typedEntry["4. close"],
              volume: typedEntry["5. volume"],
            };
          }
        );

        setIntradayData(intradayDataArray); // Mengatur state intradayData dengan array data baru
      })
      .catch((error) => console.error("Error fetching intraday data:", error));
  }, [symbol]);

  return (
    <div className="flex flex-wrap justify-center">
      {intradayData.length > 0 ? ( // Periksa apakah array data tidak kosong sebelum rendering
        intradayData.map((dataPoint, index) => (
          <div key={index} className={`m-4 ${styles.card}`}>
            <div className="font-bold">Intraday Data for {symbol}</div>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col">
                <span className="font-semibold">Date:</span>
                <span>{dataPoint.date}</span>
              </div>
              <div className="flex flex-col ml-4">
                <span className="font-semibold">Open:</span>
                <span>{dataPoint.open}</span>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col">
                <span className="font-semibold">High:</span>
                <span>{dataPoint.high}</span>
              </div>
              <div className="flex flex-col ml-4">
                <span className="font-semibold">Low:</span>
                <span>{dataPoint.low}</span>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col">
                <span className="font-semibold">Close:</span>
                <span>{dataPoint.close}</span>
              </div>
              <div className="flex flex-col ml-4">
                <span className="font-semibold">Volume:</span>
                <span>{dataPoint.volume}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default IntradayCard;
