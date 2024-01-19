import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity } from "react-native";
import { AppStyle } from "../styles/AppTheme";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import { Platform } from "react-native";

export const CreateNote = () => {

  //Dependiendo de la plataforma se debe mostrar un datepicker u otro
  const initialState = {
    titulo: "",
    detalle: ""
  }

  const [date, setDate] = useState(new Date(1598051730000))
  const [mode, setMode] = useState("date")
  const [show, setShow] = useState(false)
  const [text, setText] = useState("empty")
  const [fecha, setFecha] = useState("")
  const [hora, setHora] = useState("")
  const [estado, setEstado] = useState(initialState)

  const mOnChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === "ios")
    setDate(currentDate)

    let tempDate = new Date(currentDate)
    let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear()
    let fTime = "Hora: " + tempDate.getHours() + ", minutos: " + tempDate.getMinutes()

    setFecha(fDate)
    setHora(fTime)
  }

  const showMode = (currentDate: any) => {
    setShow(true)
    setMode(currentDate)
  }

  return (
    <View style={AppStyle.contenedorPadre}>
      <View style={AppStyle.tarjeta} >
        <View style={AppStyle.contenedor}>

          <TextInput
            style={AppStyle.textoInput}
            placeholder="Ingresa el título" />

          <TextInput
            style={AppStyle.textoInput}
            placeholder="Ingresa el detalle"
            multiline={true}
            numberOfLines={4} />

          {/* contenedor de fecha */}
          <View style={AppStyle.inputDate}>

            <TextInput
              placeholder="16/10/2023"
              style={AppStyle.textoDate} />

            <TouchableOpacity
              style={AppStyle.botonDate}
              onPress={() => showMode("date")}>
              <Text style={AppStyle.subTitle}>Date</Text>
            </TouchableOpacity>

          </View>

          {/* contenedor de hora */}
          <View style={AppStyle.inputDate}>

            <TextInput style={AppStyle.textoDate}
              placeholder="Hora: 6 minutos: 30" />

            <TouchableOpacity
              style={AppStyle.botonDate}
              onPress={() => showMode("time")}>
              <Text style={AppStyle.subTitle}>Time</Text>
            </TouchableOpacity>

          </View>

          {
            show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="datetime"
                display="default"
                onChange={mOnChange}
                minimumDate={new Date("2023-1-1")}
              />
            )}

          { /* Boton para enviar los datos */}
          <View>
            <TouchableOpacity
              style={AppStyle.botonEnviar}>
              <Text style={AppStyle.textoBtnEnviar}>
                Guardar nueva nota
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View >
  );
};
