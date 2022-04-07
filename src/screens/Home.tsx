import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Slider } from '@miblanchard/react-native-slider';
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native';
const Home = () => {

  const { t, i18n } = useTranslation()

  const [speakingSpeed, setSpeakingSpeed] = useState<number>(100)

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', paddingHorizontal: 16, backgroundColor: 'black' }}>
      <Text>{speakingSpeed / 100}</Text>
      <Slider
        value={speakingSpeed}
        onValueChange={(value: number | Array<number>) => setSpeakingSpeed(value)}
        minimumValue={80}
        maximumValue={150}
        step={5}
        thumbTintColor={'rgb(255, 75, 75)'}
        maximumTrackTintColor='rgb(38, 39, 48)'
        minimumTrackTintColor='rgb(255, 75, 75)'
      />

    </SafeAreaView>
  )
}

export default Home