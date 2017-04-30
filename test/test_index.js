const PATH = require('path');
const { beforeEach, afterEach, describe, it } = require('mocha');
const { expect, config } = require('chai');
const request = require('request-promise-native');
const sinon = require('sinon');

const { handler } = require('../src');

const context = describe;


config.includeStack = true;

describe('The Index Lambda Handler', () => {
    context('with a valid POST request', () => {
        it.skip('sends a response', (done) => {
            done(Error('test not complete'));
        });

        it.skip('sends 200', (done) => {
            done(Error('test not complete'));
        });
    });

    context('with an invalid POST request', () => {

        it.skip('sends a response', (done) => {
            done(Error('test not complete'));
        });

        it.skip('sends a 400', (done) => {
            done(Error('test not complete'));
        });
    });
});
