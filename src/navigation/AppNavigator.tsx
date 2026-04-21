import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '@/screens/home/DashboardScreen';
import PainMapScreen from '@/screens/pain/PainMapScreen';
import PainHistoryScreen from '@/screens/pain/PainHistoryScreen';
import PainAnalyticsScreen from '@/screens/pain/PainAnalyticsScreen';
import ExerciseLibraryScreen from '@/screens/exercises/ExerciseLibraryScreen';
import ExerciseDetailScreen from '@/screens/exercises/ExerciseDetailScreen';
import ExerciseProgressScreen from '@/screens/exercises/ExerciseProgressScreen';
import CBTModulesScreen from '@/screens/cbt/CBTModulesScreen';
import BreathingExerciseScreen from '@/screens/cbt/BreathingExerciseScreen';
import StressManagementScreen from '@/screens/cbt/StressManagementScreen';
import CopingStrategiesScreen from '@/screens/cbt/CopingStrategiesScreen';
import ProgressDashboardScreen from '@/screens/analytics/ProgressDashboardScreen';
import TrendAnalysisScreen from '@/screens/analytics/TrendAnalysisScreen';
import ReportGenerationScreen from '@/screens/analytics/ReportGenerationScreen';
import ProfileScreen from '@/screens/profile/ProfileScreen';
import SettingsScreen from '@/screens/profile/SettingsScreen';
import MoodTrackingScreen from '@/screens/profile/MoodTrackingScreen';
import AppointmentsScreen from '@/screens/appointments/AppointmentsScreen';
import BookAppointmentScreen from '@/screens/appointments/BookAppointmentScreen';
import { AppTabParamList } from './types';

const Tab = createBottomTabNavigator<AppTabParamList>();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="Appointments" component={AppointmentsScreen} />
    <Stack.Screen name="BookAppointment" component={BookAppointmentScreen} />
  </Stack.Navigator>
);

const PainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="PainMap" component={PainMapScreen} />
    <Stack.Screen name="PainHistory" component={PainHistoryScreen} />
    <Stack.Screen name="PainAnalytics" component={PainAnalyticsScreen} />
  </Stack.Navigator>
);

const ExerciseStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ExerciseLibrary" component={ExerciseLibraryScreen} />
    <Stack.Screen name="ExerciseDetail" component={ExerciseDetailScreen} />
    <Stack.Screen name="ExerciseProgress" component={ExerciseProgressScreen} />
  </Stack.Navigator>
);

const CbtStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="CBTModules" component={CBTModulesScreen} />
    <Stack.Screen name="BreathingExercise" component={BreathingExerciseScreen} />
    <Stack.Screen name="StressManagement" component={StressManagementScreen} />
    <Stack.Screen name="CopingStrategies" component={CopingStrategiesScreen} />
  </Stack.Navigator>
);

const AnalyticsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ProgressDashboard" component={ProgressDashboardScreen} />
    <Stack.Screen name="TrendAnalysis" component={TrendAnalysisScreen} />
    <Stack.Screen name="ReportGeneration" component={ReportGenerationScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ProfileHome" component={ProfileScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="MoodTracking" component={MoodTrackingScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
    <Tab.Screen name="Pain" component={PainStack} options={{ headerShown: false }} />
    <Tab.Screen name="Exercises" component={ExerciseStack} options={{ headerShown: false }} />
    <Tab.Screen name="CBT" component={CbtStack} options={{ headerShown: false }} />
    <Tab.Screen name="Analytics" component={AnalyticsStack} options={{ headerShown: false }} />
    <Tab.Screen name="Profile" component={ProfileStack} options={{ headerShown: false }} />
  </Tab.Navigator>
);

export default AppNavigator;
