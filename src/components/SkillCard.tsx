import React from "react";

import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { ButtonRemove } from "./ButtonRemove";

interface skillCardProps extends TouchableOpacityProps {
  skill: string;
}

interface skillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: skillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonskill}>
      <Text
        style={styles.textskill}
        {...rest}
      >
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonskill: {
    width: 300,
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 20,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginVertical: 10
  },
  textskill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  }
})