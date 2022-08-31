import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, RefreshControl } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import TaskItem from "./TaskItem";

import { getTasks, deleteTask } from "../api";

const TaskList = () => {

    const [tasks, setTasks] = useState([])
    const [refreshing, setRefreshing] = React.useState(false)
    const isFocused = useIsFocused()

    const loadTasks = async () => {
        const data = await getTasks()
        setTasks(data)
    }

    const onRefresh = React.useCallback(async () => {

        setRefreshing(true)

        await loadTasks()

        setRefreshing(false)
    }, [])

    const handleDelete = async (id) => {

        await deleteTask(id)
        await loadTasks()
    }

    useEffect(() => {
        loadTasks()
    }, [isFocused])

    const renderItem = ({ item }) => (
        <TaskItem task={item} handleDelete={handleDelete} />
    )

    return (
        <SafeAreaView style={{ flex: 1, width: "90%" }}>
            <FlatList
                style={{ width: "100%" }}
                data={tasks}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={["#78e08f"]}
                        progressBackgroundColor="#0a3d62"
                    />
                }
            />
        </SafeAreaView>
    )
}

export default TaskList