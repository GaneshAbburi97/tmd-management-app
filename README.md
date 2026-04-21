# TMD Management App (Expo + React Native)

Production-oriented foundational mobile app architecture for Temporomandibular Disorder (TMD) self-management.

## Tech stack
- Expo + React Native + TypeScript
- Redux Toolkit + Thunk
- React Navigation v6 (auth stack + tab + nested stacks)
- React Native Paper UI
- Axios services
- AsyncStorage + SQLite offline foundation
- React Hook Form + Yup/Zod validation
- Expo Notifications
- Firebase SDK ready for analytics wiring

## Quick start
```bash
npm install
cp .env.example .env
npm run typecheck
npm test
npm start
```

## Environment
Create `.env` from `.env.example` and set:
- `EXPO_PUBLIC_API_BASE_URL`
- `EXPO_PUBLIC_FIREBASE_API_KEY`
- `EXPO_PUBLIC_FIREBASE_PROJECT_ID`

## Project structure
All primary code lives in `src/`:
- `navigation/` root + auth + app tab/stack navigation
- `screens/` auth, pain, exercises, CBT, analytics, appointments, profile
- `components/` reusable UI, pain/exercise/CBT/chart widgets
- `store/` Redux store, 8 slices, async thunks
- `services/` API clients + storage/offline support
- `types/` typed domain models
- `utils/` constants, validation, date helpers, notifications
- `config/` theme/colors/spacing/typography

## Notes
- API service calls are in place and ready to connect to backend REST endpoints.
- Authentication flow includes token persistence scaffolding and protected route switching.
- Exercise library includes 50+ placeholder exercises for MVP data shape validation.
- Offline table creation is initialized via `storageService.initOfflineDatabase()`.
