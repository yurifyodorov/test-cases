<template>
  <div id="querying">
    <p>содержимое страницы querying</p>
    <div class="well">
      <v-btn id="query-btn" class="query-btn" large color="primary"
        >Button</v-btn
      >
      <div data-test-id="test-example" class="example">
        Div with <code>data-test-id</code>
      </div>
    </div>
    <hr />
    <div class="well">
      <ul class="query-list">
        <li class="first">apples</li>
        <li class="second">oranges</li>
        <li class="third">bananas</li>
        <li class="fourth">more apples</li>
      </ul>
      <div class="query-button">
        <button class="btn btn-default"><span>Save Form</span></button>
      </div>
    </div>
  </div>
</template>
