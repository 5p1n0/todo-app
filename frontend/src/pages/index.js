import React from 'react'
import View from "../components/View"
import Layout from '../components/Layout'
import Status from "../components/Status"

const Index = () => (
  <Layout>
    <Status />
    <View title="To-Do App Challenge">
      <p>
        A simple to-do app.
      </p>
    </View>
  </Layout>
)

export default Index