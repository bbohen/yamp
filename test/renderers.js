"use strict";

const assert = require('chai').assert;
const fs = require('fs');
const async = require('async');
const md5File = require('md5-file');
const rimraf = require('rimraf');

const renderer = require('../app/renderers.js');

const testDir = './testSandbox';

describe.skip("Renderers", function() {
    beforeEach(function(done) {
        rimraf(testDir, {}, function(err) {
            assert.notOk(err);
            fs.mkdir(testDir, done);
        });
    });
    afterEach(function(done) {
        rimraf(testDir, {}, done);
    });
    describe("Html Renderer", function() {
		//use md5File for html
		/*
		md5File(testDir+"/"+filename,function(err,res){
			assert.notOk(err);
			console.log(res);
			done();
		});
		*/
    });
	describe("Pdf Renderer",function(){
		
		
	});
});
