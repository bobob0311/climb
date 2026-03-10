import { useState } from 'react';
import type { SideBarProps } from '../types/forecast.types';
import { getSelectedDayStartTime } from '../../../components/templates/Forecast/helpers.ts';

interface UseDetailControlsProps {
    selectedWeekdayId: number;
}

export default function useDetailInfoControls({
    selectedWeekdayId,
}: UseDetailControlsProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [isAdjustMode, setIsAdjustMode] = useState(false);

    const [sidebarData, setSidebarData] = useState<SideBarProps | null>(null);
    const [scrollTime, setScrollTime] = useState(
        getSelectedDayStartTime(selectedWeekdayId),
    );

    const openSidebar = (sidebarData: SideBarProps) => {
        setSidebarData(sidebarData);
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openCard = () => {
        setIsCardOpen(true);
    };

    const closeCard = () => {
        setIsCardOpen(false);
    };

    const toggleAdjustMode = () => {
        setIsAdjustMode((prev) => !prev);
    };

    return {
        card: {
            isOpen: isCardOpen,
            open: openCard,
            close: closeCard,
        },
        sidebar: {
            isOpen: isSidebarOpen,
            data: sidebarData,
            open: openSidebar,
            close: closeSidebar,
        },
        selection: {
            scrollTime,
            setScrollTime,
            isAdjustMode,
            toggleAdjustMode,
        },
    };
}
