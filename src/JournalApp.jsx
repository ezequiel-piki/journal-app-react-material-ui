import React from 'react'
import { Router } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'

export const JournalApp = () => {
  return (
    <AppTheme>
    <AppRouter/>
    </AppTheme>
  )
}
