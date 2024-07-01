import React, { useState } from "react";
import { addRecetary, getRecetary } from "../utils/dataStructure";

const LogicUser = () => {
  const [controlData, setControlData] = useState([]);

  //render data
  const renderData = async (data, controlData) => {
    await addRecetary([...controlData, data]);
    try {
      const totalData = await getRecetary();
      setControlData(totalData);
      return totalData;
    } catch (error) {
      console.error(error);
    }
  };

  const simpleRender = async () => {
    try {
      const totalData = await getRecetary();
      setControlData(totalData);
      return totalData;
    } catch (error) {
      console.error(error);
    }
  };
  const filterDataId = (id) => {
    const data = controlData.filter((item) => item.id !== id);
    return data;
  };

  const deleteRecetary = async (id) => {
    const filterData = filterDataId(id);
    await addRecetary(filterData);
    try {
      const totalData = await getRecetary();
      setControlData(totalData);
      return totalData;
    } catch (error) {
      console.error(error);
    }
  };

  const changeItem = async (data) => {
    const filterData = filterDataId(data.id);
    await addRecetary([...filterData, data]);
    try {
      const totalData = await getRecetary();
      setControlData(totalData);
      return totalData;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    renderData,
    simpleRender,
    controlData,
    deleteRecetary,
    changeItem,
  };
};

export default LogicUser;
